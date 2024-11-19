# PortFolio

Este é um aplicativo de portfólio desenvolvido com React Native e Expo. O aplicativo apresenta uma interface amigável e moderna, permitindo que os usuários visualizem informações sobre o desenvolvedor, suas habilidades e links para perfis profissionais.

## Funcionalidades

### Navegação

- **Home Screen**: Tela inicial que exibe uma breve introdução sobre o desenvolvedor, botões para acessar perfis profissionais e um botão para navegar para a tela de habilidades.
- **Skills Screen**: Tela que exibe as habilidades do desenvolvedor com uma classificação de estrelas.

### Componentes

- **Avatar**: Componente que exibe a imagem do avatar do desenvolvedor.
- **BackgroundLinearGradient**: Componente que aplica um gradiente de fundo às telas.
- **CustomButton**: Botão personalizado com ícone e texto.
- **Rating**: Componente que exibe uma habilidade com uma classificação de estrelas.

### Estilos

- **Estilos personalizados**: Cada componente possui seus próprios estilos definidos usando `StyleSheet` do React Native.

## Estrutura do Projeto

```plaintext
.expo/
.idea/
assets/
src/
    components/
        [Avatar.tsx](http://_vscodecontentref_/0)
        [BackgroundLinearGradient.tsx](http://_vscodecontentref_/1)
        [CustomButton.tsx](http://_vscodecontentref_/2)
        [Rating.tsx](http://_vscodecontentref_/3)
    navigation/
        [AppNavigator.tsx](http://_vscodecontentref_/4)
    screens/
        Home/
            [Home.tsx](http://_vscodecontentref_/5)
        Skills/
            [Skills.tsx](http://_vscodecontentref_/6)
[App.tsx](http://_vscodecontentref_/7)
[index.ts](http://_vscodecontentref_/8)