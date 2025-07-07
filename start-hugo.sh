#!/bin/bash

# Start Hugo development server
# This script starts Hugo with live reload enabled and binds to all interfaces
# so it can be accessed from outside the container

echo "Starting Hugo development server..."
echo "Site will be available at: http://localhost:1313"
echo "Live reload port: 1314"
echo
echo "Press Ctrl+C to stop the server"
echo

hugo server website \
  --source website \
  --bind 0.0.0.0 \
  --port 1313 \
  --liveReloadPort 1314 \
  --disableFastRender