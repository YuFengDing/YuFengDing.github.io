set -e
npm run build
cd docs/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:YuFengDing/YuFengDing.github.io.git master
