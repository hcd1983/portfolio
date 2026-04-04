#!/usr/bin/env bash
# Launches Pencil MCP for Cursor (stdio). Requires Pencil desktop/extension install
# which places binaries under ~/.pencil/mcp/cursor/out/
set -euo pipefail
ROOT="${HOME}/.pencil/mcp/cursor/out"
os="$(uname -s)"
arch="$(uname -m)"
case "${os}/${arch}" in
  Darwin/arm64)  BIN="${ROOT}/mcp-server-darwin-arm64" ;;
  Darwin/x86_64) BIN="${ROOT}/mcp-server-darwin-x64" ;;
  Linux/x86_64)  BIN="${ROOT}/mcp-server-linux-x64" ;;
  Linux/aarch64|Linux/arm64) BIN="${ROOT}/mcp-server-linux-arm64" ;;
  *)
    echo "Pencil MCP: unsupported platform ${os} ${arch}" >&2
    exit 1
    ;;
esac
if [[ ! -x "$BIN" ]]; then
  echo "Pencil MCP: binary not found at ${BIN}" >&2
  echo "Install Pencil for Cursor: https://www.pencil.dev/downloads — then open Pencil once so MCP files are installed." >&2
  exit 1
fi
exec "$BIN" --app cursor
