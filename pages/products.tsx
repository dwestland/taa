import React from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'

const ProductPage = () => (
  <Layout title="Document" description="Document description">
    <main>
      <section>
        <h1>Buy Tokens</h1>
        <h3>Section</h3>
        <div>
          <div
            style={{
              border: '1px solid dodgerblue',
              padding: '10px',
            }}
          >
            <p>Small Plan - 10,000 Funny Tokens</p>
            <button
              className="primary-button"
              onClick={() => {
                // checkout({
                //   lineItems: [
                //     {
                //       price: 'price_1KmmMDAFPWVcpdFFZWnMTT7Z',
                //       quantity: 1,
                //     },
                //   ],
                // })
              }}
            >
              BUY TOKENS
            </button>
          </div>
          <div>
            <p>Big Plan - 100,000 Funny Tokens</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          obcaecati quam commodi perspiciatis aut sequi, corporis numquam
          reiciendis necessitatibus eligendi deserunt voluptatem iste ea
          delectus magnam. Excepturi, esse suscipit facere dolore deleniti
          temporibus odit inventore, beatae possimus quae placeat quasi
        </p>
        <Image
          src="/images/ibm.jpg"
          style={{
            maxWidth: '600px',
            maxHeight: '400px',
          }}
          width={600}
          height={400}
          alt="ENIAC"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          obcaecati quam commodi perspiciatis aut sequi, corporis numquam
          reiciendis necessitatibus eligendi deserunt voluptatem iste ea
          delectus magnam. Excepturi, esse suscipit facere dolore deleniti
          temporibus odit inventore, beatae possimus quae placeat quasi
        </p>
      </section>
    </main>
  </Layout>
)
export default ProductPage
