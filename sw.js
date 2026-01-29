self.addEventListener("fetch", function(e){
  e.respondWith(
    fetch(e.request).catch(() => new Response("Offline"))
  );
});
