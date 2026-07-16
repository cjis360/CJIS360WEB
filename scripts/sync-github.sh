#!/bin/bash
# Sync the latest commits on main to the GitHub backup repository.
# Requires the GITHUB_PAT environment variable (set as a Replit secret).
# Only runs when the current branch is 'main'; exits silently on other branches.

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")

if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "[sync-github] Not on main (currently on '${CURRENT_BRANCH}') — skipping GitHub sync."
  exit 0
fi

if [ -z "$GITHUB_PAT" ]; then
  echo "[sync-github] WARNING: GITHUB_PAT is not set — GitHub backup was NOT updated." >&2
  exit 1
fi

REMOTE_URL="https://${GITHUB_PAT}@github.com/cjis360/CJIS360WEB.git"

echo "[sync-github] Pushing main to GitHub backup..."

# Use --force so Replit's main is always the source of truth for the backup.
# Redirect stderr to stdout to capture git's progress output, then filter the
# token-bearing URL out of any error messages to avoid accidental PAT exposure.
OUTPUT=$(git push "$REMOTE_URL" "main:main" --force 2>&1)
EXIT_CODE=$?

SAFE_OUTPUT=$(echo "$OUTPUT" | sed 's|https://[^@]*@|https://***@|g')

if [ $EXIT_CODE -eq 0 ]; then
  echo "[sync-github] GitHub backup updated successfully."
else
  echo "[sync-github] WARNING: Push to GitHub backup failed. Check GITHUB_PAT permissions and network." >&2
  echo "$SAFE_OUTPUT" >&2
  exit 1
fi
