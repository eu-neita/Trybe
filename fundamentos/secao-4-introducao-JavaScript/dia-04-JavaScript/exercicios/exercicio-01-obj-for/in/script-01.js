let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  function wellcome(name) {
    name = info.personagem
    console.log('Bem-vinda,', name);
  }
  wellcome()

  info.recorrente = 'sim';
  console.log(info.recorrente);

  for (let key in info) {
    console.log(key);
  }
  for (let key in info) {
    console.log(info[key]);
  }

  info['personagem'] += ' e Tio Patinhas';
  info['origem'] += ' Christmas on Bear Mountain, Dell s Four Color Comics';
  info['nota'] += ' e O último MacPatinhas';
  info['recorrente'] = 'ambos recorrentes';
  for (let key in info) {
    console.log(info[key]);
  }