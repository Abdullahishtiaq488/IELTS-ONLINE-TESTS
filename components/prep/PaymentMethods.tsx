import Image from 'next/image';

export function PaymentMethods() {
    return (
        <div className="w-full py-8 mb-12 border-t border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Supported Payment Methods</h2>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <Image
                    src="/images/visa.svg"
                    alt="Visa"
                    width={80}
                    height={40}
                    className="object-contain"
                    priority
                />
                <Image
                    src="/images/master_card.svg"
                    alt="MasterCard"
                    width={80}
                    height={40}
                    className="object-contain"
                    priority
                />
                <Image
                    src="/images/american_express.svg"
                    alt="American Express"
                    width={80}
                    height={40}
                    className="object-contain"
                    priority
                />
                <Image
                    src="/images/jcb.svg"
                    alt="JCB"
                    width={80}
                    height={40}
                    className="object-contain"
                    priority
                />
                <Image
                    src="/images/paypal.svg"
                    alt="PayPal"
                    width={80}
                    height={40}
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
} 