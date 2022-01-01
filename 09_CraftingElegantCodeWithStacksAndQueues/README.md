# Crafting Elegant Code With Stacks And Queues

## Stacks and queues
- Both are constrained arrays
- Both designed to process temporary data
- Stack can only add and only remove from top of the stack (end of the array) - Last in first out
- Queues can only add at the end of the queue, but remove only at the start of the queue - First in first out
- These constraints are important due to multiple reasons
  - Prevents future problems by applying constraints (no accidental removal in the middle of array)
  - Better mindset when working on a problem

## Stacks
- Stack can only add and only remove from top of the stack (end of the array) - Last in first out
- Pushing, popping, reading (push, pop, access last element)
- Useful for problems such as bracket validator (JS linter) or undo functions
  - Validating brackets - if `(` is closed by `}`, it is invalid
  - Undo functions - We save multiple states. When user hits undo, we pop the top of the stack and apply it elsewhere
- When we encounter something specific, we push something to top of the stack
- When we encounter something else that causes previous condition to be resolved, we pop something from the top of the stack

## Queues
- Queues can only add at the end of the queue, but remove only at the start of the queue - First in first out
- Enqueuing, dequeuing, reading (push, shift, access zeroth element)
- Best example is printer - we add all pages we want to print to a printer, and he'll print them one by one
- The first thing that was added to be printed will be the first to get out of printer
- Basically any queue

# Exercises start on page 148, solutions available on page 446
