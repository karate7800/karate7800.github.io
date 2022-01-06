

set reason = %1%

call git init



call git add .
call git commit -m %1%

call git push

pause