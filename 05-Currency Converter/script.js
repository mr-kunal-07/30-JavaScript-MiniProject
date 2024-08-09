
        // Sample exchange rates
        const exchangeRates = {
            USD: { USD: 1, EUR: 0.85, GBP: 0.75, JPY: 110, AUD: 1.49, CAD: 1.36, CHF: 0.92, CNY: 7.10, INR: 83.25, PKR: 278.35, NPR: 132.35, MXN: 18.03, BRL: 5.20, ZAR: 18.26, SEK: 9.35, NZD: 1.60, SGD: 1.35, HKD: 7.85, TRY: 27.12, RUB: 94.50, IDR: 15350 },
            EUR: { USD: 1.18, EUR: 1, GBP: 0.88, JPY: 129, AUD: 1.75, CAD: 1.60, CHF: 1.08, CNY: 8.36, INR: 98.03, PKR: 327.90, NPR: 156.90, MXN: 21.23, BRL: 6.12, ZAR: 21.51, SEK: 11.03, NZD: 1.88, SGD: 1.59, HKD: 9.27, TRY: 31.86, RUB: 111.31, IDR: 18160 },
            GBP: { USD: 1.33, EUR: 1.14, GBP: 1, JPY: 147, AUD: 1.98, CAD: 1.74, CHF: 1.23, CNY: 9.50, INR: 112.00, PKR: 373.23, NPR: 177.97, MXN: 24.14, BRL: 6.94, ZAR: 25.24, SEK: 12.58, NZD: 2.13, SGD: 1.76, HKD: 10.42, TRY: 36.28, RUB: 124.83, IDR: 20560 },
            JPY: { USD: 0.0091, EUR: 0.0078, GBP: 0.0068, JPY: 1, AUD: 0.0135, CAD: 0.0124, CHF: 0.0083, CNY: 0.061, INR: 0.71, PKR: 2.54, NPR: 1.20, MXN: 0.16, BRL: 0.046, ZAR: 0.17, SEK: 0.089, NZD: 0.015, SGD: 0.0126, HKD: 0.071, TRY: 0.186, RUB: 0.068, IDR: 1.05 },
            AUD: { USD: 0.67, EUR: 0.57, GBP: 0.51, JPY: 74, AUD: 1, CAD: 0.88, CHF: 0.62, CNY: 4.76, INR: 55.56, PKR: 184.64, NPR: 86.15, MXN: 12.14, BRL: 3.28, ZAR: 12.21, SEK: 6.40, NZD: 1.07, SGD: 0.91, HKD: 5.27, TRY: 14.31, RUB: 5.66, IDR: 9000 },
            CAD: { USD: 0.74, EUR: 0.63, GBP: 0.58, JPY: 81, AUD: 1.14, CAD: 1, CHF: 0.70, CNY: 5.40, INR: 62.48, PKR: 207.98, NPR: 97.28, MXN: 13.74, BRL: 3.72, ZAR: 13.32, SEK: 6.90, NZD: 1.23, SGD: 1.02, HKD: 5.75, TRY: 15.62, RUB: 5.94, IDR: 9520 },
            CHF: { USD: 1.09, EUR: 0.93, GBP: 0.81, JPY: 120, AUD: 1.61, CAD: 1.42, CHF: 1, CNY: 7.70, INR: 91.57, PKR: 302.71, NPR: 143.76, MXN: 20.12, BRL: 5.27, ZAR: 19.35, SEK: 9.92, NZD: 1.70, SGD: 1.42, HKD: 8.24, TRY: 22.30, RUB: 8.49, IDR: 13680 },
            CNY: { USD: 0.14, EUR: 0.12, GBP: 0.11, JPY: 16, AUD: 0.21, CAD: 0.19, CHF: 0.13, CNY: 1, INR: 11.88, PKR: 39.56, NPR: 18.58, MXN: 2.61, BRL: 0.68, ZAR: 2.49, SEK: 1.29, NZD: 0.22, SGD: 0.18, HKD: 1.16, TRY: 3.10, RUB: 1.18, IDR: 1910 },
            INR: { USD: 0.012, EUR: 0.011, GBP: 0.009, JPY: 1.41, AUD: 0.018, CAD: 0.016, CHF: 0.011, CNY: 0.084, INR: 1, PKR: 3.34, NPR: 1.61, MXN: 0.22, BRL: 0.063, ZAR: 0.21, SEK: 0.11, NZD: 0.019, SGD: 0.015, HKD: 0.096, TRY: 0.25, RUB: 0.091, IDR: 15.40 },
            PKR: { USD: 0.0036, EUR: 0.0033, GBP: 0.0027, JPY: 0.42, AUD: 0.0054, CAD: 0.0048, CHF: 0.0033, CNY: 0.025, INR: 0.30, PKR: 1, NPR: 0.48, MXN: 0.067, BRL: 0.019, ZAR: 0.071, SEK: 0.037, NZD: 0.0062, SGD: 0.0051, HKD: 0.031, TRY: 0.085, RUB: 0.031, IDR: 5.14 },
            NPR: { USD: 0.0076, EUR: 0.0067, GBP: 0.0056, JPY: 0.84, AUD: 0.011, CAD: 0.010, CHF: 0.007, CNY: 0.054, INR: 0.62, PKR: 2.08, NPR: 1, MXN: 0.14, BRL: 0.037, ZAR: 0.14, SEK: 0.072, NZD: 0.012, SGD: 0.010, HKD: 0.062, TRY: 0.17, RUB: 0.062, IDR: 10.72 },
            MXN: { USD: 0.056, EUR: 0.048, GBP: 0.041, JPY: 5.55, AUD: 0.082, CAD: 0.073, CHF: 0.050, CNY: 0.38, INR: 4.55, PKR: 16.07, NPR: 7.19, MXN: 1, BRL: 0.27, ZAR: 0.29, SEK: 0.15, NZD: 0.085, SGD: 0.070, HKD: 0.44, TRY: 1.19, RUB: 0.44, IDR: 7150 },
            BRL: { USD: 0.19, EUR: 0.17, GBP: 0.14, JPY: 21.65, AUD: 0.30, CAD: 0.27, CHF: 0.19, CNY: 1.48, INR: 17.37, PKR: 59.77, NPR: 27.06, MXN: 3.70, BRL: 1, ZAR: 1.08, SEK: 0.57, NZD: 0.32, SGD: 0.26, HKD: 1.59, TRY: 4.41, RUB: 1.59, IDR: 26000 },
            ZAR: { USD: 0.055, EUR: 0.048, GBP: 0.040, JPY: 5.49, AUD: 0.081, CAD: 0.072, CHF: 0.050, CNY: 0.37, INR: 4.50, PKR: 15.82, NPR: 7.18, MXN: 3.46, BRL: 0.93, ZAR: 1, SEK: 0.53, NZD: 0.084, SGD: 0.070, HKD: 0.43, TRY: 1.15, RUB: 0.43, IDR: 7000 },
            SEK: { USD: 0.11, EUR: 0.089, GBP: 0.079, JPY: 11.20, AUD: 0.15, CAD: 0.14, CHF: 0.11, CNY: 0.98, INR: 11.16, PKR: 37.68, NPR: 17.59, MXN: 2.23, BRL: 0.64, ZAR: 1.89, SEK: 1, NZD: 0.15, SGD: 0.12, HKD: 0.71, TRY: 1.85, RUB: 0.71, IDR: 11500 },
            NZD: { USD: 0.63, EUR: 0.53, GBP: 0.47, JPY: 68, AUD: 0.93, CAD: 0.81, CHF: 0.59, CNY: 4.75, INR: 56.27, PKR: 188.30, NPR: 88.68, MXN: 12.10, BRL: 3.10, ZAR: 12.06, SEK: 6.63, NZD: 1, SGD: 0.84, HKD: 5.00, TRY: 14.05, RUB: 5.03, IDR: 8150 },
            SGD: { USD: 0.74, EUR: 0.63, GBP: 0.57, JPY: 82, AUD: 1.10, CAD: 0.98, CHF: 0.70, CNY: 5.50, INR: 63.82, PKR: 212.98, NPR: 99.15, MXN: 13.93, BRL: 3.61, ZAR: 13.29, SEK: 6.80, NZD: 1.19, SGD: 1, HKD: 5.87, TRY: 15.86, RUB: 5.88, IDR: 9600 },
            HKD: { USD: 0.13, EUR: 0.11, GBP: 0.09, JPY: 16, AUD: 0.19, CAD: 0.17, CHF: 0.13, CNY: 0.85, INR: 10.46, PKR: 34.87, NPR: 16.30, MXN: 2.33, BRL: 0.68, ZAR: 2.53, SEK: 1.37, NZD: 0.22, SGD: 0.17, HKD: 1, TRY: 3.16, RUB: 1.17, IDR: 1900 },
            TRY: { USD: 0.037, EUR: 0.032, GBP: 0.028, JPY: 5.37, AUD: 0.055, CAD: 0.048, CHF: 0.036, CNY: 0.32, INR: 4.00, PKR: 13.12, NPR: 6.10, MXN: 0.85, BRL: 0.23, ZAR: 0.85, SEK: 0.44, NZD: 0.074, SGD: 0.060, HKD: 0.33, TRY: 1, RUB: 0.36, IDR: 5800 },
            RUB: { USD: 0.011, EUR: 0.009, GBP: 0.008, JPY: 1.47, AUD: 0.014, CAD: 0.013, CHF: 0.011, CNY: 0.085, INR: 0.11, PKR: 3.41, NPR: 1.60, MXN: 0.22, BRL: 0.063, ZAR: 0.22, SEK: 0.11, NZD: 0.018, SGD: 0.015, HKD: 0.090, TRY: 0.28, RUB: 1, IDR: 16000 },
            IDR: { USD: 0.000065, EUR: 0.000056, GBP: 0.000048, JPY: 0.007, AUD: 0.000093, CAD: 0.000082, CHF: 0.000057, CNY: 0.00005, INR: 0.000065, PKR: 0.00025, NPR: 0.00012, MXN: 0.000017, BRL: 0.000038, ZAR: 0.00017, SEK: 0.000087, NZD: 0.00016, SGD: 0.00013, HKD: 0.00008, TRY: 0.00022, RUB: 0.00007, IDR: 1 }
        };

        function convertCurrency() {
            const amount = parseFloat(document.getElementById('amount').value);
            const fromCurrency = document.getElementById('from-currency').value;
            const toCurrency = document.getElementById('to-currency').value;

            if (isNaN(amount) || amount <= 0) {
                document.getElementById('result').innerText = 'Please enter a valid amount.';
                return;
            }

            const rate = exchangeRates[fromCurrency][toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);

            document.getElementById('result').innerText = `${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`;
        }
