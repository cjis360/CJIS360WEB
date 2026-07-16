#!/bin/bash
# Sync the latest commits to the GitHub backup repository.
# Requires the GITHUB_PAT environment variable (set as a Replit secret).

set -e

GITHUB_REPO="https://github.com/cjis360/CJIS360WEB.git"

if [ -z "$GITHUB_PAT" ]; then
  echo "[sync-github] GITHUB_PAT is not set — skipping GitHub sync." >&2
  exit 0
fi

REMOTE_URL="https://${GITHUB_PAT}@github.com/cjis360/CJIS360WEB.git"

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "main")

echo "[sync-github] Pushing branch '${CURRENT_BRANCH}' to GitHub backup..."

if git push "$REMOTE_URL" "${CURRENT_BRANCH}:main" --force-with-lease 2>&1; then
  echo "[sync-github] GitHub backup updated successfully."
else
  echo "[sync-github] Push failed (network issue or conflict). The local repo is unaffected." >&2
  exit 1
fi
