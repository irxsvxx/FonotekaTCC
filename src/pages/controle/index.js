
export default function Controle() {
    const [qualTela, setQualTela] = useState(5);
    const [isSelected, setSelection] = useState(false);
  
    mostraTela = (v) => {
      setQualTela(v);
    };

    return (
        <View>
          {qualTela == 1 ? tela1() : null}
          {qualTela == 2 ? tela2() : null}
          {qualTela == 3 ? tela3() : null}
          {qualTela == 4 ? tela4() : null}
          {qualTela == 5 ? tela5() : null}
        </View>
      );
};