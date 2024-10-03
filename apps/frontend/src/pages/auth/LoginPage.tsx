import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { UserStore, userStore, type User } from "@frontend/store/user";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
import { LoginUserMutation, useLoginUserMutation } from "@frontend/graphql";

const registerSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8),
});

function LoginPage() {
  const navigate = useNavigate();
  const [loginUserMutation, { error }] = useLoginUserMutation();
  const login = userStore((state: UserStore) => state.login);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Login
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={async (values, _actions) => {
              await loginUserMutation({
                variables: { input: values },
              })
                .then(({ data }: { data: LoginUserMutation }) => {
                  if (data?.loginUser) {
                    login(
                      data.loginUser.user as User,
                      data.loginUser.accessToken ?? "",
                      data.loginUser.refreshToken ?? "",
                    );
                  }
                })
                .finally(() => navigate("/moje-domy/random/dashboard"));
              // const navigate = useNavigate();
              // const selectedHouse = myHouseStore(
              //   (state: MyHousesStore) => state.selectedHouse,
              // );
              // const setHouse = myHouseStore((state: MyHousesStore) => state.setHouse);
              // const getHouse = myHouseStore((state: MyHousesStore) => state.getHouse);
              // useEffect(() => {
              //   if (!getHouse()) {
              //     if (userHouses.length > 0) {
              //       setHouse(userHouses?.[0].id);
              //     }
              //   }
              // }, [setHouse, getHouse]);
            }}
          >
            {({ errors, isSubmitting }) => (
              <Form>
                <Stack spacing={4}>
                  <Field name="email">
                    {({ field, form }: any) => (
                      <FormControl
                        id="email"
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel>Email</FormLabel>
                        <Input {...field} type="email" />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, form }: any) => (
                      <FormControl
                        id="password"
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <FormLabel>Password {form.error}</FormLabel>
                        <Input {...field} type="password" />
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Stack spacing={10} pt={2}>
                    <Button
                      isLoading={isSubmitting}
                      loadingText="Submitting"
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      type="submit"
                    >
                      Sign up
                    </Button>
                  </Stack>
                  {error && (
                    <Text color="red.500" align="center">
                      {error.message}
                    </Text>
                  )}
                  <Stack pt={6}>
                    <Text align={"center"}>
                      Not registered yet?{" "}
                      <Link color={"blue.400"}>Register</Link>
                    </Text>
                  </Stack>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
}

export default LoginPage;
