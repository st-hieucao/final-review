Reference: https://viblo.asia/p/webpack-tu-a-den-a-webpack-la-gi-1VgZveNMKAw

1. Resolve alias
USE: import { showName } from '@shared/utils/index'; 
INSTEAD: import { showName } from '../shared/utils/index';

When configuring alias in webpack file, eslint doesn't understand and gives error
- Fix:
+ Run npm install eslint-plugin-import eslint-import-resolver-alias --save-dev
+ Create .eslintrc.js in root of project
+ Config for .eslintrc.js

2. Code spliting
Collect the code of each library to a common used file

3.


4. ESLINT
- [0]: off, [1]: warning, [2]: error


