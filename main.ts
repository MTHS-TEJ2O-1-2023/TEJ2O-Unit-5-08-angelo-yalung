/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Nov 2023
 * This program ...
*/

// variables
let distanceToObject: number = 0

// setup
basic.showIcon(IconNames.Happy)

// loop forever
while (true) {
    // grabbing the distance to the Object
  if (input.buttonIsPressed(Button.A) == true) {
    distanceToObject = sonar.ping(
      DigitalPin.P1,
      DigitalPin.P2,
      PingUnit.Centimeters
    )

    basic.showIcon(IconNames.Happy)
    // if an object is within 10 cm of the sensor
    if (distanceToObject > 10) {
      robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
        } else {
          robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
        }
    }
}
