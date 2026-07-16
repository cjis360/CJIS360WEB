import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactSubmissionSchema, type InsertContactSubmission } from '@shared/schema';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle2, AlertCircle, ShieldAlert } from 'lucide-react';

export default function ContactForm() {
  const { toast } = useToast();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      fullName: '',
      email: '',
      agencyName: '',
      phone: '',
      organizationType: '',
      state: '',
      role: '',
      employeeCount: '',
      packageInterest: '',
      auditTimeframe: '',
      itReliance: '',
      preferredContactMethod: '',
      message: '',
      consent: false,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      setSubmitSuccess(false);
      setSubmitError(null);
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      setSubmitSuccess(true);
      setSubmitError(null);
      toast({
        title: 'Message sent successfully!',
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: (error: any) => {
      let errorMessage = 'Please try again later.';
      
      // Try to extract detailed error message from response
      if (error?.message) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      
      setSubmitError(errorMessage);
      setSubmitSuccess(false);
      toast({
        title: 'Failed to send message',
        description: errorMessage,
        variant: 'destructive',
      });
    },
  });

  const hasErrors = Object.keys(form.formState.errors).length > 0;

  const onSubmit = (data: InsertContactSubmission) => {
    // Add the honeypot field to the payload
    const websiteField = (document.querySelector('input[name="website"]') as HTMLInputElement)?.value || '';
    mutation.mutate({
      ...data,
      website: websiteField,
    } as any);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Security Warning Callout */}
        <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-md p-4 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-900 dark:text-amber-100">
            Do not submit Criminal Justice Information, criminal-history records, case details, passwords, credentials, or sensitive system information through this form.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    data-testid="input-fullname"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john.doe@agency.gov"
                    {...field}
                    data-testid="input-email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="agencyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Agency Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Metro Police Department"
                    {...field}
                    data-testid="input-agency"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone (Optional)</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    {...field}
                    data-testid="input-phone"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="organizationType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization Type (Optional)</FormLabel>
                <Select value={field.value || ''} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select organization type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Police Department">Police Department</SelectItem>
                    <SelectItem value="Sheriff's Office">Sheriff's Office</SelectItem>
                    <SelectItem value="Courts">Courts</SelectItem>
                    <SelectItem value="Corrections">Corrections</SelectItem>
                    <SelectItem value="Dispatch/911">Dispatch/911</SelectItem>
                    <SelectItem value="University Police">University Police</SelectItem>
                    <SelectItem value="Noncriminal Justice Agency">Noncriminal Justice Agency</SelectItem>
                    <SelectItem value="Technology/Cloud Provider">Technology/Cloud Provider</SelectItem>
                    <SelectItem value="MSP">MSP</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State/Jurisdiction (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., California"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role/Title (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., IT Director"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="employeeCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Approximate User/Employee Count (Optional)</FormLabel>
                <Select value={field.value || ''} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select employee range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1-25">1-25</SelectItem>
                    <SelectItem value="26-50">26-50</SelectItem>
                    <SelectItem value="51-100">51-100</SelectItem>
                    <SelectItem value="101-250">101-250</SelectItem>
                    <SelectItem value="251-500">251-500</SelectItem>
                    <SelectItem value="500+">500+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="packageInterest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Desired Service or Platform Package (Optional)</FormLabel>
                <Select value={field.value || ''} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select package" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                    <SelectItem value="Platform Demo">Platform Demo</SelectItem>
                    <SelectItem value="Readiness Assessment">Readiness Assessment</SelectItem>
                    <SelectItem value="Baseline">Baseline</SelectItem>
                    <SelectItem value="Professional">Professional</SelectItem>
                    <SelectItem value="Managed Compliance">Managed Compliance</SelectItem>
                    <SelectItem value="Enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="auditTimeframe"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upcoming Audit/Assessment Timeframe (Optional)</FormLabel>
                <Select value={field.value || ''} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Within 3 months">Within 3 months</SelectItem>
                    <SelectItem value="3-6 months">3-6 months</SelectItem>
                    <SelectItem value="6-12 months">6-12 months</SelectItem>
                    <SelectItem value="No upcoming audit">No upcoming audit</SelectItem>
                    <SelectItem value="Not sure">Not sure</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="itReliance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IT Infrastructure (Optional)</FormLabel>
                <Select value={field.value || ''} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select IT infrastructure" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Internal IT">Internal IT</SelectItem>
                    <SelectItem value="County/Municipal IT">County/Municipal IT</SelectItem>
                    <SelectItem value="Managed Service Provider (MSP)">Managed Service Provider (MSP)</SelectItem>
                    <SelectItem value="Combination">Combination</SelectItem>
                    <SelectItem value="Not sure">Not sure</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredContactMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Contact Method (Optional)</FormLabel>
                <Select value={field.value || ''} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select contact method" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Email">Email</SelectItem>
                    <SelectItem value="Phone">Phone</SelectItem>
                    <SelectItem value="Either">Either</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your compliance needs..."
                  className="min-h-32 resize-none"
                  {...field}
                  data-testid="input-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="cursor-pointer">
                  I consent to CJIS360 contacting me about this inquiry and acknowledge the{' '}
                  <a href="/privacy" className="underline hover:text-blue-600 dark:hover:text-blue-400">
                    Privacy Policy
                  </a>
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        {/* Hidden Honeypot Field */}
        <input
          type="text"
          name="website"
          className="absolute -left-[9999px] w-px h-px overflow-hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {submitSuccess && (
          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-md p-4 flex items-start gap-3" data-testid="success-message">
            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-green-900 dark:text-green-100">
                Message sent successfully!
              </p>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                We'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        )}

        {submitError && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-md p-4 flex items-start gap-3" data-testid="error-message">
            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-destructive">
                Failed to send message
              </p>
              <p className="text-sm text-destructive/80 mt-1">
                {submitError}
              </p>
            </div>
          </div>
        )}

        {hasErrors && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-md p-4" data-testid="error-summary">
            <p className="text-sm text-destructive font-medium">
              Please fix the errors above before submitting.
            </p>
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={mutation.isPending}
          data-testid="button-submit-contact"
        >
          {mutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {mutation.isPending ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  );
}
