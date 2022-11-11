import { Center, Spinner } from "native-base";
import { PrimaryTemplate } from "./template/PrimaryTemplate";

export function Loading() {
  return (
    <PrimaryTemplate>
      <Center flex={1}>
        <Spinner color='primary.700' size='lg' />
      </Center>
    </PrimaryTemplate>
  );
}