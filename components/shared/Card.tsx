import MainNavigation from "../MainNavigation";

export default function Card(props: any) {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
}
