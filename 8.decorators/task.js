//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = md5(args);
    let objectInCache = cache.find((item) => hash === item.hash);
    if (objectInCache) {
      return "Из кэша: " + objectInCache.value;
    }
    const result = func(...args);
    cache.push({
      value: result,
      hash: hash
    });

    if (cache.length > 5) {
      cache.shift();
    }
    return "Вычисляем: " + result;
  }
  return wrapper;
}


// //Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId;
  let hasCalled = false;

  function isTrottledDecorator(args) {
    func.apply(this, args);
    hasCalled = true;
    wrapper.count++;
  }

  function wrapper(...args) {
    wrapper.allCount++;
    if (timeoutId) clearTimeout(timeoutId);
    if (!hasCalled) {
      isTrottledDecorator(args);
    } else {
      timeoutId = setTimeout(() => isTrottledDecorator(args), delay);
    }
    console.log(111, wrapper.allCount, wrapper.count)
  }
  wrapper.allCount = 0;
  wrapper.count = 0;
  return wrapper;
}