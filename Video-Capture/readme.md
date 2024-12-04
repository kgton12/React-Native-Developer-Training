# VideoCaptureApp

VideoCaptureApp é um aplicativo para captura e reprodução de vídeos, projetado para ser simples e eficiente. Ele utiliza a biblioteca `expo-camera` para acessar a câmera do dispositivo, oferecendo uma experiência fluida para gravar e reproduzir vídeos.

## Funcionalidades

### 🎥 **Captura de Vídeo**
- O componente `VideoCaptureView` permite ao usuário iniciar e parar a gravação de vídeos.
- O estado da gravação é gerenciado pelo componente principal `App`, que controla o início e o término das gravações.

### ▶️ **Reprodução de Vídeo**
- Após a gravação, os vídeos podem ser visualizados no componente `VideoPlayer`.
- O usuário pode escolher:
  - **Compartilhar** o vídeo.
  - **Salvar** o vídeo na galeria.
  - **Descartar** o vídeo, se não estiver satisfeito.

### 🔒 **Gerenciamento de Permissões**
O aplicativo garante que o usuário tenha as permissões necessárias para:
- Acessar a câmera.
- Utilizar o microfone.
- Salvar e visualizar vídeos na galeria do dispositivo.

Se alguma permissão não for concedida, o aplicativo solicita as autorizações adequadas antes de permitir o uso das funcionalidades.

## Tecnologias Utilizadas
- **Expo**: Plataforma para desenvolvimento de aplicativos React Native.
- **expo-camera**: Biblioteca para acessar a câmera do dispositivo.
- **React Native**: Framework para criar aplicativos móveis.
- **expo-media-library**: Para salvar vídeos na galeria do dispositivo.
- **expo-sharing**: Para compartilhar vídeos com outros aplicativos.
