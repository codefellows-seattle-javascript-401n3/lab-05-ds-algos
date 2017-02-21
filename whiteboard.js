'use strict';

function insert(node, target) {
  if(!node) return
  if(node.val < target.val) {
    if(target.left) {
      insert(node.left, target) {
      } else {
        target.left = node;
      }
    } else {
      if(target.right) {
        insert(node.right, target)
      } else {
        target.right = node;
      };
    };
  };
};

function delete(node, current) {
  if (!node) return
  if (current.val < node.val) {
    delete (node.left, current)
  } else if (current.val > node.val) {
    delete (node.right, current)
  }
}
