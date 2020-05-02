# starTrail.星迹
界面地址: [星迹](https://aladdin99.github.io/starTrail/dist/#/)

## 使用方法
```brash
    git clone https://github.com/aladdin99/starTrail.git
    cd starTrail
    npm install
    npm run dev
```

## 部署方法
1.编辑 config 文件夹下的 index.js

```brash
    在 build 里设置 assetsPublicPath: '/starTrail/dist/'
    starTrail为项目名，如果自己的项目名有变化则替换为自己的项目名。
```

2.编译、上传

```brash
    npm run build
    git add .
    git commit -m 'add starTrail.'
    git push
```

3.开启 GitHub Pages 功能

在 GitHub 仓库中打开 Settings，下滑找到 GitHub Pages.
设置 Source 切换为 master branch, 稍后生成一个地址(将作为预览地址)
回到 项目 Code 界面，点击 Edit 将 刚刚生成的地址 + '/starTrail/dist/' 粘贴到 Website 中。

4.注意点

如果设置完打开界面地址是空白的，那么去看下 GitHub 项目中是否存在 dist 文件。
如果没有，那么打开 .gitignore 文件，将 /dist/ 注释或者删除掉。
因为 git push 出于尽可能的压缩减少文件上传到 GitHub 所以将其列入不可上传名单。

每一次修改再次提交之前都需要 重新 build 一下文件，并将其全部打包上传。
