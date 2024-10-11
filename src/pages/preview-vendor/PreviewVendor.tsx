import { LINKS } from "shared/enums";
import {
  Background,
  Container,
  Link,
  Header,
  LinksContainer,
  Logo,
  H2,
  LogOut,
} from "./styled";
import { BusinessName, Info, Map, Photos } from "./ui";
import useSWR from "swr";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Service } from "features/index";
import { useEffect } from "react";
import { useVendorContext } from "shared/hooks";

export const PreviewVendor = () => {
  const { setVendor } = useVendorContext();
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = useParams();
  const { data } = useSWR(
    id ? ["get-vendor", { _id: id }] : null,
    ([_, params]) => Service.Business.getBusiness(params)
  );

  const logOut = async () => {
    try {
      await Service.Firebase.signOut();

      navigate(LINKS.login);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (data) {
      setVendor(data);
    }
  }, [data]);

  return (
    <Background>
      <Header>
        <Logo src="/logo.svg" alt="Logo" />

        <LinksContainer>
          <Link
            href={`/#${LINKS.preview_vendor}/${id}`}
            $active={location.pathname == `${LINKS.preview_vendor}/${id}`}
          >
            STOREFRONT PREVIEW
          </Link>

          <Link
            href={`/#${LINKS.add_vendor}?id=${id}`}
            $active={location.pathname == `${LINKS.add_vendor}/${id}`}
          >
            MANAGE DETAILS
          </Link>

          <LogOut onClick={logOut}>LOG OUT</LogOut>
        </LinksContainer>
      </Header>

      <Container>
        <Photos />

        <BusinessName />

        <Info />

        <H2>{data?.description}</H2>

        <Map />
      </Container>
    </Background>
  );
};
