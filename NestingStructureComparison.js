Array.prototype.sameStructureAs = function (other) {
  let first = JSON.stringify(this);
  let second = JSON.stringify(other);

  // compare contents and return false if mismatch (based on commas)
  let contentFirst = (first.match(/,/g) || []).length;
  let contentSecond = (second.match(/,/g) || []).length;
  if (contentFirst != contentSecond){
     return false;
   }
  
  // replace non-brackets with x
  first = first.replace(/[^\[\]]/g,'x');
  second = second.replace(/[^\[\]]/g,'x');
  
  // replace groups of x with a single x
  first = first.replace(/[x]+/g,'x');
  second = second.replace(/[x]+/g,'x');

  // compare - return true if the same; false if not same
  if (first == second){
    return true;
  }
  else{
    return false;
  }
};