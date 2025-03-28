import Image from 'next/image';

export function PaymentMethods() {
    const paymentMethods = [
        { name: 'Visa', src: '/images/visa.svg' },
        { name: 'MasterCard', src: '/images/master_card.svg' },
        { name: 'American Express', src: '/images/american_express.svg' },
        { name: 'JCB', src: '/images/jcb.svg' },
        { name: 'PayPal', src: '/images/paypal.svg' },
    ];

    return (
        <div className="w-full py-4 sm:py-6 md:py-8 mb-6 sm:mb-12 border-t border-b border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Supported Payment Methods</h2>
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6" role="list" aria-label="Supported payment methods">
                {paymentMethods.map((method) => (
                    <div key={method.name} className="w-[60px] sm:w-[80px]" role="listitem">
                        <Image
                            src={method.src}
                            alt={`${method.name} payment method`}
                            width={80}
                            height={40}
                            className="object-contain w-full h-auto"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
} 