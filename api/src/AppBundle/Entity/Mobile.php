<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Mobile
 *
 * @ORM\Table(name="mobile", indexes={@ORM\Index(name="IDX_3C7323E0979B1AD6", columns={"company_id"}), @ORM\Index(name="IDX_3C7323E0E78C9C0A", columns={"engine_id"})})
 * @ORM\Entity
 */
class Mobile
{
    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="registration_number", type="string", length=9, nullable=true)
     */
    private $registrationNumber;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="start_date", type="date", nullable=true)
     */
    private $startDate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="end_date", type="date", nullable=true)
     */
    private $endDate;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="mobile_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var \AppBundle\Entity\Company
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Company")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="company_id", referencedColumnName="id")
     * })
     */
    private $company;

    /**
     * @var \AppBundle\Entity\MobileEngine
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\MobileEngine")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="engine_id", referencedColumnName="id")
     * })
     */
    private $engine;


}

