type TreeTraversalOrder = "pre"|"post"|"level"
type BinaryTreeTraversalOrder = TreeTraversalOrder | "in"

abstract class Tree<U> {
  /**
   * Inserts a new element into the tree
   * @param data 
   */
  abstract insert(data: U):void

  /**
   * Removes an element from the tree
   * @param data 
   */
  abstract delete(data: U): void

  /**
   * Returns an IterableIterator which traverses the tree in the provided order
   * 
   * (default): perform in in-order traversal of the tree
   * @param order the order to traverse the tree in ("pre"/"in"/"post")
   */
  traverse(order: TreeTraversalOrder = "pre"): IterableIterator<U> {
    switch(order) {
      case "pre":
        return this.preOrderTraverse()
      case "post":
        return this.postOrderTraverse()
      case "level": 
        return this.levelOrderTraverse()
      default:
        throw new Error(`${order} is not a valid traversal order!`)
    }
  }

  /**
   * Traverses the tree in pre-order fashion.
   * 
   * Traverses the tree using the following algorithm:
   *  1. Visit the root
   *  2. Visit the subtree formed by each of the trees children, 
   *     in order, using the pre-order traversal algorithm 
   */
  protected abstract preOrderTraverse(): IterableIterator<U>

  /**
   * Traverses the tree in post-order fashion.
   * 
   * Traverses the tree using the following algorithm:
   *  1. Visit the subtree formed by each of the trees children, 
   *     in order, using the post-order traversal algorithm 
   *  2. Visit the root
   */
  protected abstract postOrderTraverse(): IterableIterator<U>

  /**
   * Traverses the tree in level-order fashion.
   * 
   * Traverses the tree using the following algorithm:
   *  1. Visit the root
   *  2. Visit the children of the root, in order
   *  3. Visit the children of the children of the root, in order
   *  4. etc... 
   */
  protected abstract levelOrderTraverse(): IterableIterator<U>

  /**
   * Searches the tree for the provided value and returns true if it is in the tree
   * 
   * NOTE
   * 
   * @param data the value to search for
   */
  abstract search(data: U): boolean 
}

/**
 * A special case of N-ary trees in which each node is allowed to have 2 children (leaves)
 */
abstract class BinaryTree<U> extends Tree<U> {
  /**
   * Returns an IterableIterator which traverses the tree in the provided order
   * 
   * (default): perform in in-order traversal of the tree
   * @param order the order to traverse the tree in ("pre"/"in"/"post")
   */
   traverse(order: BinaryTreeTraversalOrder = "pre"): IterableIterator<U> {
    switch(order) {
      case "pre":
        return this.preOrderTraverse()
      case "in":
        return this.inOrderTraverse()
      case "post":
        return this.postOrderTraverse()
      case "level": 
        return this.levelOrderTraverse()
      default:
        throw new Error(`${order} is not a valid traversal order!`)
    }
  }

  /**
   * Traverses the tree in in-order fashion.
   * 
   * NOTE: This traversal strategy is only sensical for binary trees,
   * and does not generalize well to N-ary trees. When implementing an
   * N-ary 
   * 
   * Traverses the tree using the following algorithm:
   *  1. Visit the root
   *  2. Visit the subtree to the left of the root, in order,
   *     using the in-order traversal algorithm
   *  3. Visit the subtree to the right of the root, in order,
   *     using the in-order traversal algorithm
   */
     protected abstract inOrderTraverse(): IterableIterator<U>
}