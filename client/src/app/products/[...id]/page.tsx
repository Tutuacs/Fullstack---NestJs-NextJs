type Props = {
    params: {
      id: string;
    };
  };

export default function ProductIdPage(props: Props) {
    return (
        <main>
            <h1>ProductId: {props.params.id} </h1>
        </main>
    )
}
    