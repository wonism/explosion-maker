import GIF from 'gif.js';
import { fromEvent } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { size } from './constants';
import getContext from './getContext';

declare global {
  interface Window {
  }
}

const loader: any = document.getElementById('loader');
const animatedImage: any = document.getElementById('animated-image');
const image: any = document.getElementById('image');
const empty: any = document.getElementById('empty');
const fileUploader = document.getElementById('file-uploader');
const file$ = fromEvent<any>(fileUploader, 'change');

const getImage$ = file$.pipe(
  map(e => e.target.files),
  map(files => files[0]),
  tap(() => {
    loader.setAttribute('class', 'active');
    fileUploader.setAttribute('disabled', 'disabled');
  }),
  switchMap(getContext),
);

const subscribe = getImage$.subscribe(
  (context: CanvasRenderingContext2D) => {
    const explosionFrames = document.querySelectorAll('#image-group img');

    const images = [
      context, context, context, context, empty, empty,
      context, context, context, empty, empty,
      context, empty, empty,
      context, empty,
      context, empty,
      context, empty,
      context, empty,
      ...Array.from(explosionFrames),
    ];

    const gif = new GIF({
      workers: 4,
      quality: 10,
    });

    images.forEach((image) => { gif.addFrame(image, { delay: 10 }); });

    gif.on('finished', (blob) => {
      const url = URL.createObjectURL(blob);

      loader.removeAttribute('class');
      fileUploader.removeAttribute('disabled');

      animatedImage.src = url;
    });

    gif.render();
  },
  () => {
    loader.removeAttribute('class');
    fileUploader.removeAttribute('disabled');

    alert('Failed to make explosion');
  }
);
