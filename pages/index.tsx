import { useEffect, useState } from "react"
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core"
import Head from "next/head"
import { ALL_COUNTRIES, Country } from "@app/domains"
import { COUNTRY_LABELS } from "@app/data/countryLabels"

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<Country>("PL")
  // const [discount, setDiscount] = useState<number>(Number(COUNTRY_DATA[selectedCountry].taxRate))
  // useEffect(() => {
  //   setDiscount(Number(COUNTRY_DATA[selectedCountry].taxRate))
  // }, [selectedCountry])

  // const [price, setPrice] = useState<number>(0)

  // const priceWithDiscount = price * discount
  // var formatter = new Intl.NumberFormat("ru-RU", {
  //   style: "currency",
  //   currency: COUNTRY_DATA[selectedCountry].currency,
  // })

  return (
    <div>
      <Head>
        <title>Tax 🍟</title>
        <meta name="description" content="Tax-free calculator" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4">TAX 🍟</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Paper className="flex items-center flex-col w-full mt-8 p-8">
          <Grid container spacing={2} alignContent="center">
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">В какой вы стране?</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value as Country)}
                >
                  {ALL_COUNTRIES.map((country) => (
                    <MenuItem key={country} value={country}>
                      {COUNTRY_LABELS[country]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* <Grid item xs={12} md={6} alignContent="center" alignItems="center">
              <Typography>Максимальная скидка: {discount * 100}%</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Введите сумму покупки"
                type="number"
                onChange={(e) => setPrice(+e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                label="Вы получите"
                value={formatter.format(priceWithDiscount)}
              />
            </Grid> */}
          </Grid>
        </Paper>
      </Container>
    </div>
  )
}
