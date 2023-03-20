import { Button, useToast } from "@chakra-ui/react"

function ToastExample() {
    const toast = useToast()
    return (
      <Button data-cy="added-to-cart-toast"
        onClick={() =>
          toast({
            title: 'Added to cart!',
            description: "Go to cart to complete your order",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    )
  }