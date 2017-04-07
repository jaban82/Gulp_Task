## Default. 폴더구조
```
public
- dist //산출물
-- css
-- img
-- js
- lib //외부lib
- src //작업폴더
-- img
-- js
-- scss
```

## STEP 1. Install Task

사용 모듈 설치하기

```bash
$ npm install
```
설치 후 `node_modules`폴더 생성, 노드모듈 설치됨.


## STEP 2. Task Name

설치된 npm에 따른 명령어

* del : `del` logs 폴더의 로그파일(logs/.html) 삭제
```bash
$ gulp del
```
* htmlhint : `gulp-htmlhint` html validator check
```bash
$ gulp html
```
* csslint : `gulp-csslint` css validator check
```bash
$ gulp css
```
* sass_task : `gulp-sass` 전처리기 scss 실행, css 파일변환
```bash
$ gulp sass_task
```
* browserSync : `browser-sync` 가상서버 실행(localhost), watch 포함
```bash
$ gulp server
```
