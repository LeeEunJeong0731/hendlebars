const handlebars = require('handlebars');

// 템플릿 문자열 또는 파일에서 템플릿을 읽어옵니다.
const source = `
  <html>
    <head>
      <title>{{title}}</title>
    </head>
    <body>
      <h1>{{greeting}}, {{name}}!</h1>
      <ul>
        {{#each fruits}}
          <li>{{this}}</li>
        {{/each}}
      </ul>
    </body>
  </html>
`;

// Handlebars.compile을 사용하여 템플릿을 컴파일합니다.
const template = handlebars.compile(source);

// 데이터 객체를 정의합니다.
const data = {
  title: 'Handlebars Example',
  greeting: 'Hello',
  name: 'John',
  fruits: ['Apple', 'Banana', 'Orange'],
};

// 컴파일된 템플릿에 데이터를 적용하여 HTML을 생성합니다.
const result = template(data);

// 생성된 HTML을 출력합니다.
console.log(result);
