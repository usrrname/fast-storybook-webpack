export function withArgs(Story: any, context: any): any;
export const decorators: ((Story: any, context: any) => any)[];
export default preview;
declare namespace preview {
    namespace parameters {
        const viewMode: string;
        const showToolbar: boolean;
        namespace actions {
            const argTypesRegex: string;
        }
        namespace controls {
            namespace matchers {
                const color: RegExp;
                const date: RegExp;
            }
        }
    }
}
