public class Aplication {
  public static void main(String[] args) {
    Carro meuCarro = new Carro("chevrolett","camaro", 2023);
    Carro carroDoMeuPai = new Carro("Mercedes","AMG", 2023);
    System.out.println("esse é meu carro: " + meuCarro.exibirInformacoes());
    meuCarro.setAno(2020);
    System.out.println("atualiuzando o ano do meu carro: " + meuCarro.exibirInformacoes());
    System.out.println("esse é o carro do meu pai: " + carroDoMeuPai.exibirInformacoes());
    System.out.println("quantidade de carros: " + Carro.quantidadeDeCarros());
  }
}
