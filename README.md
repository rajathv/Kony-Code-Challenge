# Kony-Code-Challenge
Visualizer Version : V9SP2FP16
# This is a program which solves the below problem statement

We have a robot that can pickup blocks from a stash, move them horizontally and lower them in place. There are 10 positions available to lower blocks number 0 to 9. Each position can hold up to 15 blocks.

The robot understands the commands 'P', 'M' and 'L':

P: Pickup from the stash and move to position 0
M: Move to the Next Position
L: Lower the block
The robot is safe to operate and very forgiving:

There are always blocks in the stash (Pickup always gets a block)
If the robot already holds a block, Pickup will reset position to 0
The robot will not go beyond position 9, Trying to move further does nothing
Lowering the block on a pile of 15 does nothing
Lowering without a block does nothing
Robot ignores any command that is not 'P', 'M','L'
Implement a function that takes a String of commands for the robot. The function should output String representing the number of blocks (in hexadecimal) at each position after running all the commands

APK is available to download [here](https://drive.google.com/file/d/1ihuhsfBcnZS0RGlPmpy4BWumCk3l2XJQ/view?usp=sharing).
