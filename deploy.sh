#!/bin/bash

# Pesan commit default
MESSAGE="Update website"

# Kalau user masukin pesan di argumen, pakai itu
if [ $# -gt 0 ]; then
  MESSAGE="$*"
fi

echo "🚀 Menambahkan semua perubahan..."
git add .

echo "📝 Commit dengan pesan: $MESSAGE"
git commit -m "$MESSAGE"

echo "⬆️ Push ke branch main..."
git push origin main

echo "✅ Website berhasil di-update!"
