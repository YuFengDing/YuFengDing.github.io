set -e
npm run build
cd docs/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:YuFengDing/YuFengDing.github.io.git master
tar -cvf ./tar.tar ./ && scp -P 28858 tar.tar root@65.49.230.29:/www/wwwroot/www.pratice.top
