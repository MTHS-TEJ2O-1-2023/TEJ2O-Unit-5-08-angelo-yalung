/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Nov 2023
 * This program measures the distance between objects while moving a Motor
*/

// variables
let distanceToObject: number = 0

// setup
basic.showIcon(IconNames.Happy)

// infinite loop
while (true) {
  while (input.buttonIsPressed(Button.A) == true) {
    // find distance from sonar
    basic.clearScreen()
    distanceToObject = sonar.ping(
      DigitalPin.P1,
      DigitalPin.P2,
      PingUnit.Centimeters
    )
    basic.showNumber(distanceToObject)
    // if the distance to an object is less than 10 cm away, turn
      if (distanceToObject <= 10) {
        robotbit.StpCarMove(-10, 48)
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
        robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B4)
        robotbit.StpCarMove(10, 48)
      } else {
        // moving normally
        robotbit.StpCarMove(10, 48)
     }
    }
}