/// will only work for speific urls- theefore not relaible for validating non public urls and some apis may block header requests (using that option intead of GET)

function ifUrlExist(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const request = new XMLHttpRequest();
    request.open("HEAD", url, true); // Use HEAD instead of GET for efficiency
    request.timeout = 5000; // 5 second timeout

    request.onload = () => {
      resolve(request.status >= 200 && request.status < 300);
    };

    request.onerror = () => {
      resolve(false);
    };

    request.ontimeout = () => {
      resolve(false);
    };

    request.send();
  });
}
//iframe has load event that can be used to validate iframe urls however u should preecheck ur urls or use closed libraries like google maps where the failure wiull be on teh lib not u.
