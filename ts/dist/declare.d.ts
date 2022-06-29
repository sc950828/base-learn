interface VueOption {
    el: string;
    data: any;
}
declare class Vue {
    options: VueOption;
    constructor(options: VueOption);
}
declare const app: Vue;
