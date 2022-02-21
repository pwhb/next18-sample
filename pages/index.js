import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default function Home() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { pathname, query, asPath, locale } = router;
  const onClick = () => {
    router.push({ pathname, query }, asPath, {
      locale: locale === "en" ? "my" : "en",
    });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{t("title")}</h1>
      <button onClick={onClick}>change language</button>
    </div>
  );
}
