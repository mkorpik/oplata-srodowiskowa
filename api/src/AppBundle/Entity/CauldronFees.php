<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CauldronFees
 *
 * @ORM\Table(name="cauldron_fees", indexes={@ORM\Index(name="IDX_D07A983330602CA9", columns={"kind_id"}), @ORM\Index(name="IDX_D07A9833EC8B7ADE", columns={"period_id"})})
 * @ORM\Entity
 */
class CauldronFees
{
    /**
     * @var float
     *
     * @ORM\Column(name="fee", type="float", precision=10, scale=0, nullable=true)
     */
    private $fee;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="cauldron_fees_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var \AppBundle\Entity\CauldronKind
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\CauldronKind")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="kind_id", referencedColumnName="id")
     * })
     */
    private $kind;

    /**
     * @var \AppBundle\Entity\Period
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Period")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="period_id", referencedColumnName="id")
     * })
     */
    private $period;


}

