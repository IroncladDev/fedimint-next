## Ecash Betting

An ecash betting game. You play by entering some ecash notes, and then you are returned either half or double your bet in ecash notes.

Playing a round will:

1. Call a [React Server Action](https://react.dev/reference/rsc/server-actions) with the ecash notes you've entered.
2. Make a call to the [Fedimint Clientd](https://github.com/fedimint/fedimint-clientd) to claim the ecash notes and calculate the amount.
3. If it can afford to pay double the bet, rolls a 50% chance to generate double the bet amount in ecash notes. Otherwise, generates half the bet amount in ecash notes.
4. Responds with the ecash notes and whether your bet halved or doubled.
