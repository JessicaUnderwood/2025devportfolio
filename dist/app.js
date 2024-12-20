import { annotate, annotationGroup } from "https://unpkg.com/rough-notation?module";

const e = document.querySelector('.firstHighlight');
const annotation = annotate(e, { type: 'highlight', color: ' #fad54f' });
annotation.show();