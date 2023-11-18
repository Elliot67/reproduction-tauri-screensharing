## Reproduction of screensharing transparent window

The goal is to create a transparent window which will be on top of all system windows and wil be screenshared in order the reveal the content directly behind it.

## Steps to reproduce

1. `yarn install`
2. `yarn run tauri dev`
3. Try to screenshare a window with [any website](https://webrtc.github.io/samples/src/content/getusermedia/getdisplaymedia/).
4. Move the shared window to make it collapse with the other app window.

### Status :

- MacOS : Window behind the shared window are not visible in the screenshare.
- Windows :
