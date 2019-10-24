const toUrl = (context: CanvasRenderingContext2D) => new Promise<string>((resolve) => {
  context.canvas!.toBlob((blob: Blob) => {
    const url = window.URL.createObjectURL(blob);

    resolve(url);
  }, 'image/gif');
});

export default toUrl;
