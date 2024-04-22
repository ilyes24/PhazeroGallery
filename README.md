# PhazeRo Gallery

This is a responsive photo gallery application where users can view a list of photos fetched from the Unsplash API. Users can mark photos as favorites, and these favorites persist across sessions using the browser's localStorage.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Key Configuration](#api-key-configuration)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js installed on your local machine
- An API key from the Unsplash developer platform
- git is not required but should make you move along with this docs

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ilyes24/PhazeroGallery.git
```

2. Navigate to the project directory

```bash
cd PhazeroGallery
```

3. Install dependencies

```bash
bun install
```

## Usage

To start the development server, run:

```bash
bun  dev
```

Open http://localhost:3000 to view the application in your browser.

## API Key Configuration

To obtain an API key from the Unsplash developer platform:

1.  Register for an account on Unsplash.
2.  Create a new application to obtain your API key.
3.  Copy your API key and configure it in the project.

Create a `.env` file in the root directory of your project and add the following:
```
REACT_APP_UNSPLASH_ACCESS_KEY=your-access-key
```

Replace `your-access-key` with your actual Unsplash API access key.

## Technologies Used

-   [NextJS 14 with App Router](https://nextjs.org/) (for image optimization and all in batteries included functionalities)
-   [Tanstack React Query](https://tanstack.com/query/latest) (for handling the caching and and infinite query requests)
- [Tailwind](https://tailwindcss.com/) (don't need to explain this 😁)
-   [useHooks-TS](https://usehooks-ts.com/) for built-in **debounce** and **localStorage** hooks
-   [ShadCN](https://ui.shadcn.com/) for building our own visual identity (although i used the stock one with minor changes)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.