type Props = {
    params: {
      brand: string;
    };
  };

export default function TrucksByBrand(props: Props) {
    return (
        <main>
            <h1>Truck of brand: {props.params.brand} </h1>
        </main>
    )
}
    