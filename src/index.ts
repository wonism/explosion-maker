import gifshot from 'gifshot';
import { fromEvent } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { size } from './constants';
import getContext from './getContext';
import toUrl from './toUrl';

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
  switchMap(toUrl),
  tap((url) => {
    image.src = url;
  })
);

const subscribe = getImage$.subscribe(
  () => {
    const explosionFrames = document.querySelectorAll('#image-group img');
    const src = image.src;

    const images = [
      src, src, src, src, empty, empty,
      src, src, src, empty, empty,
      src, empty, empty,
      src, empty,
      src, empty,
      src, empty,
      src, empty,
      ...Array.from(explosionFrames).map(_ => (_ as any).src),
    ];

    gifshot.createGIF({
      gifWidth: size,
      gifHeight: size,
      images,
      interval: 0.1,
      numFrames: 10,
      frameDuration: 1,
      sampleInterval: 10,
      numWorkers: 2,
    }, (result) => {
      loader.removeAttribute('class');
      fileUploader.removeAttribute('disabled');

      if (!result.error) {
        animatedImage.src = result.image;
      } else {
        alert('Failed to make explosion');
      }
    });
  },
  () => {
    loader.removeAttribute('class');
    fileUploader.removeAttribute('disabled');

    alert('Failed to make explosion');
  }
);
