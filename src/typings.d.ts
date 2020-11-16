// 이 파일의 용도는 우리가 추후 ts 파일에서 mdx 확장자로 이루어진 파일을 불러오게 될 때 모듈이 없다는 에러를 방지하는 것 입니다.
declare module '*.mdx';

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

    const src: string;
    export default src;
}