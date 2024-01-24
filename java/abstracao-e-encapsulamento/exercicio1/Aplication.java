public class Aplication {
  public static void main(String[] args) {
    Carro meuCarro = new Carro("chevrolett","camaro", 2023);
    System.out.println(meuCarro.exibirInformacoes());
    meuCarro.setAno(2020);
    System.out.println(meuCarro.exibirInformacoes());
  }
}
