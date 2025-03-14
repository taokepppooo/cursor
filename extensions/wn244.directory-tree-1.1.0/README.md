# directory-tree

根据项目目录自动生成文档树的插件

> 开发插件的原因是因为之前使用 `Project Tree` 生成文档树的时候，生成的文档树没有按照文件夹和文档进行分类，也没有自动过滤 `.git` 目录，看到作者在 `issue` 中说要支持，但是目前还没支持，想着作者可能最近忙，想给作者提PR，但是项目拉下来之后跑不起来。。。
>
> 于是就决定自己写一个。

## 功能

- 根据项目目录自动生成文档树
- 自动过滤 `.gitignore` 文件中的目录和 `.git` 目录
- 将文件夹和文件分类排序，保证目录和项目目录排序一致
- 自动将目录树插入到 `READEME.md` 文件底部

## 使用说明

- 安装插件 `directory-tree`
- 快捷键 `shift+ctrl+p，调出用于执行命令的输入框`
- 在输入框内输入 `Directory Tree`并确认

即可自动将目录树插入到 `READEME.md` 文件底部

## 插件设置

```json
{
    //是否在插入目录树后自动打开README文件默认为true
    "directoryTree.openREADME": true, 
    //是否忽略.git目录，默认为true
    "directoryTree.ignoreGit": true, 
    //是否在目录中添加文件夹和文件的Emoji，默认为false
    "directoryTree.supportEmoji": false,
    //支持两种主题，Linux-Tree和Markdown-List-Nesting，Linux-Tree是类似于linux下tree命令生成的树形结构，Markdown-List-Nesting是markdown的列表嵌套格式，默认是Linux-Tree
    "directoryTree.theme": "Linux-Tree"
}
```

## 功能展示

```
directory-tree
├─ .vscode
│  ├─ extensions.json
│  ├─ launch.json
│  ├─ settings.json
│  └─ tasks.json
├─ src
│  ├─ test
│  │  ├─ suite
│  │  │  ├─ extension.test.ts
│  │  │  └─ index.ts
│  │  └─ runTest.ts
│  ├─ data.d.ts
│  ├─ extension.ts
│  └─ fileStructure.ts
├─ .eslintrc.json
├─ .gitignore
├─ .vscodeignore
├─ .yarnrc
├─ CHANGELOG.md
├─ package.json
├─ README.md
├─ tsconfig.json
├─ vsc-extension-quickstart.md
├─ webpack.config.js
└─ yarn.lock
```

## TODO

- [x] 插件配置
  - [X] 是否在插入目录后自动打开 `README.md`
  - [X] 是否自动忽略 `.git` 目录
  - [x] 是否在目录中添加文件夹和文件的Emoji
  - [x] 主题选择
- [x] 多种树的样式
  - [X] 支持文件和文件夹的emoji
  - [x] 支持markdown列表嵌套格式的树
- [x] 支持工作区生成文档树
- [X] `README.md`不存在时，自动创建 `README.md`文件并注入(`fs.appendFileSync`自己会创建)

## 版本说明

### 1.0.0

- 根据项目目录自动生成文档树
- 自动过滤 `.gitignore` 文件中的目录和 `.git` 目录
- 将文件夹和文件分类排序，保证目录和项目目录排序一致
- 自动将目录树插入到 `READEME.md` 文件底部并自动打开 `READEME.md` 文件

### 1.1.0

- 加了个图标
- 支持是否忽略`.git`目录配置
- 支持文件夹和文件的Emoji添加
- 支持配置多种树的样式
- 支持工作区生成文档树
- 修复已知bug
